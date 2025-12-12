const { z } = require("zod");

const signUpSchema= z.object({
    username: z.string({required_error:"Username is Required"}).trim().
    min(3,{message:"Minimum 3 word is required "}).
    max(30, "Username must be at most 30 characters"),

  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string",
  })
  .email("Invalid email format")
  .min(5, "Email must be at least 5 characters")
  .max(50, "Email must be at most 50 characters"),

  phone: z.string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone must be a number",
  }).refine(val => val.toString().length === 10, {
    message: "Phone number must be exactly 10 digits",
  }),

  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
  .min(6, "Password must be at least 6 characters")
  .max(100, "Password must be at most 100 characters"),

  dob: z.string({
    required_error: "Date of birth is required",
    invalid_type_error: "DOB must be a string",
  })
  .refine(val => /^\d{4}-\d{2}-\d{2}$/.test(val), {
    message: "DOB must be in YYYY-MM-DD format",
  }),

   role: z.string({
    required_error: "Role is required",
    invalid_type_error: "Role must be a string",
  }),

   collegeId: z.string({
    required_error: "CollegeId is required",
    invalid_type_error: "CollegeID must be a string",
  }),

})
module.exports=signUpSchema;