// import { useRecoilValue } from "recoil";
// import { nickNameAtom } from "../../../../atoms/atom";
import { useForm } from "react-hook-form";
// import { postDuplicateCheck } from "../../../../apis/api";
import { useState } from "react";
import React from "react";
import { postTILCrts } from "../../../../apis/api";
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
  const { id } = useParams();

  const [watchTime, setWatchTime] = useState(0);
  const [playWatch, setPlayWatch] = useState(false);
  // const [inputCnt, setInputCnt] = useState(1);
  // const [inputVisible12, setInputVisible12] = useState(false);
  // const [inputVisible13, setInputVisible13] = useState(false);
  const [ban, setBan] = useState(false);
  let watch;
  let banInterval;

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // setError,
    // reset,
    // getValues,
  } = useForm();

  // const onInputBtn = async ({ target: { id } }) => {
  //   let num = inputCnt;
  //   if (id.indexOf("+") !== -1 && num < 3) {
  //     await setInputCnt(inputCnt + 1);
  //     num += 1;
  //   } else if (id.indexOf("-") !== -1 && num > 1) {
  //     await setInputCnt(inputCnt - 1);
  //     num -= 1;
  //   }
  //   if (id === "-1" && inputCnt === 1) {
  //     reset({
  //       startTime1: "",
  //       endTime1: "",
  //     });
  //   }
  //   if (id === "-1" && inputCnt === 2) {
  //     reset({
  //       startTime1: getValues("startTime2"),
  //       endTime1: getValues("endTime2"),
  //       startTime2: "",
  //       endTime2: "",
  //     });
  //   }
  //   if (id === "-1" && inputCnt === 3) {
  //     reset({
  //       startTime1: getValues("startTime2"),
  //       endTime1: getValues("endTime2"),
  //       startTime2: getValues("startTime3"),
  //       endTime2: getValues("endTime3"),
  //       startTime3: "",
  //       endTime3: "",
  //     });
  //   }
  //   if (id === "-2" && inputCnt === 2) {
  //     reset({
  //       startTime2: "",
  //       endTime2: "",
  //     });
  //   }
  //   if (id === "-2" && inputCnt === 3) {
  //     reset({
  //       startTime2: getValues("startTime3"),
  //       endTime2: getValues("endTime3"),
  //       startTime3: "",
  //       endTime3: "",
  //     });
  //   }
  //   if (id === "-3") {
  //     reset({ startTime3: "", endTime3: "" });
  //   }
  //   setVisible(num);
  // };

  // const setVisible = (num) => {
  //   setInputVisible12(num >= 2);
  //   setInputVisible13(num >= 3);
  // };

  const startWatch = () => {
    tf = true;
    setBan((pre) => !pre);
    setPlayWatch(true);
    watch = setInterval(increaseTime, 1000);
    banInterval = setInterval(switchBan, 1000);
  };

  const switchBan = () => {
    setBan((pre) => !pre);
    clearInterval(banInterval);
  };

  const increaseTime = () => {
    setWatchTime((prev) => prev + 1);
    if (!tf) {
      clearInterval(watch);
    }
  };

  const pauseWatch = async () => {
    setPlayWatch(false);
    tf = false;
    setBan((pre) => !pre);
    banInterval = setInterval(switchBan, 1000);
  };

  const resetWatch = () => {
    setWatchTime(0);
  };

  const onValid = async (data) => {
    if (playWatch) {
      pauseWatch();
    }
    if (
      data.startTime1 === "" &&
      data.startTime2 === "" &&
      data.startTime3 === "" &&
      data.endTime1 === "" &&
      data.endTime2 === "" &&
      data.endTime3 === "" &&
      watchTime === 0 &&
      data.files.length === 0
    ) {
      alert("공부시간, 스톱워치, Study 사진 중 하나는 필수항목입니다.");
    } else {
      const result = await postTILCrts({
        tilId: id,
        description: data.description,
        startTime1: data.startTime1,
        endTime1: data.endTime1,
        startTime2: data.startTime2,
        endTime2: data.endTime2,
        startTime3: data.startTime3,
        endTime3: data.endTime3,
        watchTime:
          (watchTime / 60 < 10 ? "0" : "") +
          parseInt(watchTime / 60) +
          ":" +
          (watchTime % 60 < 10 ? "0" : "") +
          (watchTime % 60),
        files: data.files,
      });
      if (result.status === 201) {
        alert("인증 등록 되었습니다.");
        navigate(`/til/${id}`);
      } else if (result.code === "CO01") {
        const message = result.errors[0].message;
        alert(message);
      } else {
        const message = result.message;
        alert(message);
      }
    }
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
                여기는 인증 등록 화면 입니다
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
                    {/* <button
                      className=" w-7 h-7 hover:bg-purple-700 bg-purple-600 text-white rounded-full "
                      value={"-"}
                      onClick={onInputBtn}
                    >
                      -
                    </button>
                    <button
                      className=" w-7 h-7 hover:bg-purple-700 bg-purple-600 text-white rounded-full "
                      onClick={onInputBtn}
                      hidden={inputVisible12}
                    >
                      +
                    </button> */}
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
                    {/* <button
                      className=" w-7 h-7 hover:bg-purple-700 bg-purple-600 text-white rounded-full "
                      value={"-"}
                      onClick={onInputBtn}
                    >
                      <p className="text-1xl" id={"-2"}>
                        -
                      </p>
                    </button>
                    <button
                      className=" w-7 h-7 hover:bg-purple-700 bg-purple-600 text-white rounded-full i"
                      onClick={onInputBtn}
                      hidden={inputVisible13}
                    >
                      <p className="text-1xl" id={"+2"}>
                        +
                      </p>
                    </button> */}
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
                    {/* <button
                      className=" w-7 h-7 hover:bg-purple-700 bg-purple-600 text-white rounded-full"
                      value={"-"}
                      onClick={onInputBtn}
                    >
                      <p className="text-1xl" id={"-3"}>
                        -
                      </p>
                    </button> */}
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
                    {(watchTime / 60 < 10 ? "0" : "") +
                      parseInt(watchTime / 60) +
                      " : " +
                      (watchTime % 60 < 10 ? "0" : "") +
                      (watchTime % 60)}
                  </label>
                  <button
                    onClick={!playWatch ? startWatch : pauseWatch}
                    disabled={ban}
                  >
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
                  {!playWatch ? (
                    <button onClick={resetWatch}>
                      <img
                        alt=""
                        src="https://img.icons8.com/ios-glyphs/30/000000/stop--v2.png"
                        className="inline"
                      />
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  내용 *
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
                        accept="image/jpg,image/png,image/jpeg,image/gif"
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
