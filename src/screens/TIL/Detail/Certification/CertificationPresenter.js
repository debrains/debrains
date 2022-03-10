import { useRecoilValue } from "recoil";
import { nickNameAtom } from "../../../../atoms/atom";
import { useForm } from "react-hook-form";
import { postDuplicateCheck } from "../../../../apis/api";
import { useRef, useState } from "react";
import log from "tailwindcss/lib/util/log";
import React from "react";

const profile = {
  name: "새벽",
  imageUrl:
    "https://blog.kakaocdn.net/dn/YieGK/btrrAdZmjHZ/Tt5m5Z4iEsCRgGDfHLj8Dk/img.png",
  coverImageUrl:
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
};

function MemberForm() {
  const [watchTime, setWatchTime] = useState(0);
  const [playWatch, setPlayWatch] = useState(false);
  let watch;

  const startWatch = () => {
    if (!playWatch) {
      setPlayWatch(true);
      watch = setInterval(increaseTime, 1000);
      console.log("asdasdasd", watch);
    }
  };

  const increaseTime = () => {
    console.log("asd");
    setWatchTime((prev) => prev + 1);
  };

  const pauseWatch = async () => {
    setPlayWatch(false);
    console.log("와치", watch);
    clearInterval(watch);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onValid = (data) => {
    console.log(data);
  };
  console.log(errors);
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
                여기는 인증 등록 화면 입니다
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                차곡차곡 쌓이는 "나의 성장 기록"
              </p>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  공부시간
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    {...register("startTime")}
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
                  <button className=" w-8 h-8 hover:bg-purple-700 bg-purple-600 text-white rounded-full">
                    <p className="text-2xl">-</p>
                  </button>
                  <input
                    {...register("startTime")}
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
                  <button className=" w-8 h-8 hover:bg-purple-700 bg-purple-600 text-white rounded-full">
                    <p className="text-2xl">-</p>
                  </button>
                  <button className=" w-8 h-8 hover:bg-purple-700 bg-purple-600 text-white rounded-full">
                    <p className="text-2xl">+</p>
                  </button>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 ">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 self-center"
                >
                  스톱워치
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <label
                    htmlFor="date"
                    className="block text-xl font-medium text-gray-700 "
                  >
                    {watchTime}
                  </label>
                  <button onClick={!playWatch ? startWatch : pauseWatch}>
                    <img
                      alt=""
                      src={
                        playWatch
                          ? "https://img.icons8.com/ios-glyphs/30/000000/pause--v1.png"
                          : "https://img.icons8.com/ios-glyphs/25/000000/play--v1.png"
                      }
                      className="inline"
                    />
                  </button>
                  <button onClick={pauseWatch}>
                    <img
                      alt=""
                      src="https://img.icons8.com/ios-glyphs/30/000000/stop--v2.png"
                      className="inline"
                    />
                  </button>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  내용
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    {...register("about")}
                    rows={3}
                    className="max-w-lg shadow-sm block w-full focus:ring-purple-500 focus:border-purple-500 sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Study 사진
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center">
                    <label className="block">
                      <input
                        {...register("profileImg")}
                        accept="image/jpg,impge/png,image/jpeg,image/gif"
                        type="file"
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
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              인증 등록하기
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

const CertificationPresenter = () => {
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
};
export default React.memo(CertificationPresenter);
