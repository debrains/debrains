import React from "react";
import { GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from "../../contents";
import { getCurrentUser } from "../../apis/api";

function LoginPresenter(props) {
  getCurrentUser();
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Debrains
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              차곡차곡 쌓이는 나의 성장기록
            </p>
          </div>
          <div>
            <a
              href={GOOGLE_AUTH_URL}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Google 로그인
            </a>
            <a
              href={GITHUB_AUTH_URL}
              className="group mt-5 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Github 로그인
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPresenter;
