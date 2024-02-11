import { GET, POST } from "@/utils/api";
import { ErrorBody, SuccessBody } from "@/utils/response";
import { User } from "@prisma/client";

export const getUsers = async () => {
  GET("/api/users");
};

export const getUser = async (id: string) => {
  GET(`/api/users/${id}`);
};

export const addUser = async (data: { name: string; email: string }) => {
  try {
    const response: SuccessBody<User> = await POST("/api/users", data);
    return response;
  } catch (error) {
    return error as ErrorBody;
  }
};
