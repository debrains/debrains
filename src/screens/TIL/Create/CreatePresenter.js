import { useRecoilValue } from "recoil";
import { profileAtom } from "../../../atoms/atom";
import { useForm } from "react-hook-form";
import { postTILs } from "../../../apis/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const profile = {
  name: "새벽",
  imageUrl:
    "https://blog.kakaocdn.net/dn/YieGK/btrrAdZmjHZ/Tt5m5Z4iEsCRgGDfHLj8Dk/img.png",
  coverImageUrl:
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
};

function MemberForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const profile = useRecoilValue(profileAtom);
  const [cycleType, setCycleType] = useState("every");

  let newDate = new Date();
  let date = newDate.getDate();
  let month =
    newDate.getMonth() + 1 < 10
      ? "0" + (newDate.getMonth() + 1)
      : newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let today = year + "-" + month + "-" + date;
  let tomorrow = year + "-" + month + "-" + date + 10;

  const [sDate, setSDate] = useState(today);
  const [eDate, setEDate] = useState(tomorrow);

  const onValid = async (data) => {
    if (data.startDay > data.endDay) {
      setError(
        "startDay",
        { message: "종료일이 시작일보다 빠를수 없습니다" },
        { shouldFocus: true }
      );
    }
    const result = await postTILs({
      userId: profile.id,
      subject: data.subject,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      cycleStatus: data.cycleStatus,
      cycleCnt: data.cycleCnt,
    });
    if (result.status === 201) {
      alert("등록되었습니다.");
      navigate("/til");
    } else {
      const message = result.message;
      alert(message);
    }
  };

  const changeDate = (prop) => {
    if (prop.target.name === "startDay") {
      setSDate(prop.target.value);
    } else {
      setEDate(prop.target.value);
    }
  };
  const changeCycleType = (prop) => {
    if (prop.target.value === "every") {
    }
    setCycleType(() => prop.target.value);
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
                여기는 TIL 등록 화면 입니다
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                차곡차곡 쌓이는 "나의 성장 기록"
              </p>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  목표
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    {...register("subject", {
                      required: "목표를 입력해주세요",
                    })}
                    type="text"
                    autoComplete="nickname"
                    className="max-w-lg block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                  <span>{errors?.nickName?.message}</span>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  소개
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    {...register("description", {
                      required: "소개를 입력해주세요",
                    })}
                    rows={3}
                    className="max-w-lg shadow-sm block w-full focus:ring-purple-500 focus:border-purple-500 sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  기간
                </label>
                <div hidden={true}>asd</div>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    {...register("startDate")}
                    defaultValue={today}
                    onChange={changeDate}
                    min={today}
                    max={eDate}
                    type="date"
                    autoComplete="start-time"
                    className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md m-1"
                  />
                  <span className="p-3"> ~ </span>
                  <input
                    {...register("endDate", {
                      required: "기간을 입력해주세요",
                    })}
                    onChange={changeDate}
                    min={sDate}
                    type="date"
                    autoComplete="end-time"
                    className="w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md m-1"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  주기
                </label>
                <div className="mt-5 sm:mt-0 sm:col-span-2 sm:pt-2">
                  <div className="max-w-lg space-y-4">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5 cen">
                        <input
                          {...register("cycleStatus")}
                          onChange={changeCycleType}
                          type="radio"
                          value={"EVERYDAY"}
                          className=" h-4 w-4 text-purple-600 border-gray-300 form-check-input checked:bg-purple-500"
                        />
                      </div>
                      <div className="ml-3 text-sm mr-10">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          매일
                        </label>
                      </div>
                      <div className="flex items-center h-5 cen">
                        <input
                          {...register("cycleStatus")}
                          onChange={changeCycleType}
                          value={"WEEK"}
                          type="radio"
                          className=" h-4 w-4 text-purple-600 border-gray-300 form-check-input checked:bg-purple-500 checked:"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          주
                        </label>
                      </div>
                      <div className="flex items-center h-5 ml-3 ">
                        <input
                          {...register("cycleCnt")}
                          disabled={cycleType !== "WEEK"}
                          type="number"
                          min={1}
                          max={6}
                          className={
                            `form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
                          ` +
                            (cycleType !== "WEEK" ? `bg-gray-200` : `bg-white`)
                          }
                        />
                      </div>
                      <div className="text-sm ml-1">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          회
                        </label>
                      </div>
                    </div>
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
              TIL 등록하기
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default function CreatePresenter() {
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
