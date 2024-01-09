import { db } from "./db";

export const getRecommended = async () => {
  // getting all the users from the database
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
};
