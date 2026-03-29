export const getAuthErrorMessage = (error) => {
  if (!error) return 'Something went wrong. Please try again.';
  const code = error.code;
  const map = {
    'auth/popup-closed-by-user': '',
    'auth/email-already-in-use':
      'That email is already registered. Try signing in instead.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/weak-password': 'Password should be at least 6 characters.',
  };
  if (code !== undefined && map[code] !== undefined) return map[code];
  return error.message || 'Something went wrong. Please try again.';
};
