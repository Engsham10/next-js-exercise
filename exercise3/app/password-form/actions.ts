
"use server";

export type PasswordState = {
  success: boolean;
  message: string;
  error: string;
};

export async function validatePassword(
  prevState: PasswordState,
  formData: FormData
): Promise<PasswordState> {

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  // Check required fields
  if (!email || !password) {
    return {
      success: false,
      message: "",
      error: "All fields are required."
    };
  }

  // Check password length
  if (password.length < 6) {
    return {
      success: false,
      message: "",
      error: "Password must be at least 6 characters."
    };
  }

  // Successful validation
  console.log("Submitted Email:", email);

  return {
    success: true,
    message: "Registration successful!",
    error: ""
  };
}
