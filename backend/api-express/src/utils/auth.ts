export default {
  secret:
    process.env.JWT_SECRET || "AAAAA46546assssssss79w9889v12332vd564659sdd5",
  expiresIn: "1h",
} as const;
