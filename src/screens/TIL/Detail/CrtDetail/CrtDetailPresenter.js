// import { nickNameAtom } from "../../../../atoms/atom";
import { useForm } from "react-hook-form";
// import { postDuplicateCheck } from "../../../../apis/api";
import { useState } from "react";
import React from "react";
import { deleteTILCrt, postTILCrts } from "../../../../apis/api";
import { useParams, useNavigate } from "react-router-dom";

const profile = {
  name: "새벽",
  imageUrl:
    "https://blog.kakaocdn.net/dn/YieGK/btrrAdZmjHZ/Tt5m5Z4iEsCRgGDfHLj8Dk/img.png",
  coverImageUrl:
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
};

let tf = true;
function MemberForm() {
  const navigate = useNavigate();
  const { id, crtid } = useParams();
  const [watchTime, setWatchTime] = useState(0);

  const { register, handleSubmit } = useForm();

  const onValid = (data) => {
    navigate(`/til/${id}/${crtid}`);
  };
  const delCrt = () => {
    deleteTILCrt({ crtid: crtid });
  };

  return (
    <>
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit(onValid)}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                여기는 인증 상세 화면 입니다
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                차곡차곡 쌓이는 "나의 성장 기록"
              </p>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  공부시간
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <div className="py-1">
                    <input
                      {...register("startTime" + 1)}
                      type="datetime-local"
                      autoComplete="start-time"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md "
                    />
                    <span className="p-3"> ~ </span>
                    <input
                      {...register("endTime" + 1)}
                      type="datetime-local"
                      autoComplete="end-time"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="py-1">
                    <input
                      {...register("startTime" + 2)}
                      type="datetime-local"
                      autoComplete="start-time"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md "
                    />
                    <span className="p-3"> ~ </span>
                    <input
                      {...register("endTime" + 2)}
                      type="datetime-local"
                      autoComplete="end-time"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="py-1">
                    <input
                      {...register("startTime" + 3)}
                      type="datetime-local"
                      autoComplete="start-time"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md "
                    />
                    <span className="p-3"> ~ </span>
                    <input
                      {...register("endTime" + 3)}
                      type="datetime-local"
                      autoComplete="end-time"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 ">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 self-center"
                >
                  스톱워치
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-xl font-medium text-gray-700 "
                  >
                    {(watchTime / 3600 < 10 ? "0" : "") +
                      parseInt(watchTime / 3600) +
                      " : " +
                      ((watchTime / 60) % 60 < 10 ? "0" : "") +
                      parseInt((watchTime / 60) % 60) +
                      " : " +
                      (watchTime % 60 < 10 ? "0" : "") +
                      (watchTime % 60)}
                  </label>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  내용
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <textarea
                    {...register("description")}
                    rows={3}
                    className="max-w-lg shadow-sm block w-full focus:ring-purple-500 focus:border-purple-500 sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Study 사진
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <div className="flex items-center">
                    <label className="block">
                      <input
                        {...register("files")}
                        accept="image/jpg,impge/png,image/jpeg,image/gif"
                        type="file"
                        multiple="multiple"
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              뒤로가기
            </button>
            <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              인증 수정하기
            </button>
            <button
              onClick={delCrt}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              인증 삭제하기
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

function CrtDetailPresenter(props) {
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex-1 relative z-0 flex">
            <main className="flex-1 relative z-0 xl:order-last">
              <div>
                <div>
                  <img
                    className="h-32 w-full object-cover lg:h-64"
                    src={profile.coverImageUrl}
                    alt=""
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="py-10">
          <div className="mt-8 max-w-3xl mx-auto  gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-2 ">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg border border-purple-200 ">
                  <div className="px-4 py-5 sm:px-6">
                    <MemberForm />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrtDetailPresenter;
