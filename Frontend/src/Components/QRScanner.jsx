import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function QRScanner() {
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('Point camera at a QR code');
  const scannerRef = useRef(null);
  const scannedRef = useRef(false); // 🔒 prevent multiple scans

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'qr-reader',
      { fps: 10, qrbox: 250, rememberLastUsedCamera: true },
      false
    );

    scanner.render(
      async (decodedText) => {
        if (scannedRef.current) return; // 🚫 block re-scan

        scannedRef.current = true;
        setStatus('Verifying QR...');
        setResult(decodedText);

        try {
          const res = await fetch('https://campus-event-management-yx4y.onrender.com/api/scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ qrId: decodedText }),
          });

          const data = await res.json();

          if (!res.ok) {
            setStatus(data.message || 'Access Denied ❌');
          } else {
            setStatus('Access Granted ✅');
          }
        } catch (err) {
          setStatus('Server Error ❌');
        }

        // 🛑 stop camera after scan
        scanner.clear().catch(() => {});
      },
      () => {
        // ignore scan errors
      }
    );

    scannerRef.current = scanner;

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">QR Scanner</h2>
      <p className="text-sm mb-3">{status}</p>

      <div id="qr-reader" className="w-full" />

      {result && (
        <div className="mt-4 p-3 border rounded">
          <p>
            <span className="font-semibold">Decoded:</span> {result}
          </p>
        </div>
      )}
    </div>
  );
}

export default QRScanner;
