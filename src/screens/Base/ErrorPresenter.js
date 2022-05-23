import React from "react";
import { GITHUB_AUTH_URL, GOOGLE_AUTH_URL } from "../../contents";

function ErrorPresenter(props) {
  return (
    <>
      <div className="min-h-full h-96 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-9xl font-extrabold text-gray-900">
              404
            </h2>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              요청하신 페이지를 찾을 수 없습니다.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPresenter;
