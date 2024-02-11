import { NextResponse } from "next/server";

export type ErrorBody = {
  error: string;
  status: 400 | 404 | 500;
};

export type SuccessBody<T> = {
  message: string;
  data?: T;
  status: 200;
};

type Body<T> = ErrorBody | SuccessBody<T>;

export const response = <T>(body: Body<T>) => {
  return NextResponse.json(body, { status: body.status });
};
