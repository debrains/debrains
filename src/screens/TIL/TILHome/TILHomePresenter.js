import React from "react";
const profile = {
  coverImageUrl:
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

function TILHomePresenter(props) {
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex-1 relative z-0 flex">
            <main className="flex-1 relative z-0 xl:order-last">
              <div>
                <img
                  className="h-32 w-full object-cover lg:h-64"
                  src={profile.coverImageUrl}
                  alt=""
                />
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <div className="sm:grid sm:grid-cols-6 sm:gap-4 sm:items-start sm:pt-5">
              <div>
                <p className="mb-5 text-center">TIL</p>
                <p className="text-center">3개</p>
              </div>
              <div>
                <p className="mb-5 text-center">진행중</p>
                <p className="text-center">3개</p>
              </div>
              <div>
                <p className="mb-5 text-center">완료</p>
                <p className="text-center">0개</p>
              </div>
              <div className="mt-1 sm:mt-0 sm:col-span-3 pl-10 pr-10">
                <p className="text-center">달성률</p>

                <progress
                  className="progress progress-primary w-full "
                  value="30"
                  max="100"
                />
                <p className="text-center">30%</p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative flex justify-between items-center ml-6 mt-6">
              <div>
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="focus:ring-purple-500 h-6 w-6 text-purple-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700 ml-2"
                  >
                    진행중인 목표만 보기
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="/til/create"
                  className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  TIL 등록하기
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="md:grid md:grid-cols-4">
                <a href="/til/1" className="col-span-3 mp-3 hover:rotate-2">
                  <span className="ml-6 text-lg leading-6 font-medium text-gray-900">
                    CSS 익히기
                  </span>
                  <div className="mt-4 mb-2 ml-3">
                    <span className="ml-3 text-base text-gray-500">
                      인증성공 3회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      인증실패 1회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      남은인증 8회
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="mt-3 ml-6 text-base text-gray-500">
                      22. 01. 01 ~ 22. 02. 01
                    </span>
                    <span className="mt-2 ml-6 text-base text-gray-500 ml-5 ">
                      🗓 7일 뒤 종료
                    </span>
                  </div>
                  <div className="mt-2">
                    <progress
                      className="progress progress-primary w-56 ml-6"
                      value="30"
                      max="100"
                    />
                    <span className="ml-5">30%</span>
                  </div>
                </a>
                <div className="col-span-1">
                  <a href="/til/1/certification">
                    <button className="w-full h-full hover:bg-purple-700 border-2 border-purple-700 hover:text-white rounded-box">
                      <p className="text-5xl">+</p>
                      <p>인증하기</p>
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:grid md:grid-cols-4">
                <a href="/til/1" className="col-span-3 mp-3 hover:rotate-2">
                  <span className="ml-6 text-lg leading-6 font-medium text-gray-900">
                    CSS 익히기
                  </span>
                  <div className="mt-4 mb-2 ml-3">
                    <span className="ml-3 text-base text-gray-500">
                      인증성공 3회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      인증실패 1회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      남은인증 8회
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="mt-3 ml-6 text-base text-gray-500">
                      22. 01. 01 ~ 22. 02. 01
                    </span>
                    <span className="mt-2 ml-6 text-base text-gray-500 ml-5 ">
                      🗓 7일 뒤 종료
                    </span>
                  </div>
                  <div className="mt-2">
                    <progress
                      className="progress progress-primary w-56 ml-6"
                      value="30"
                      max="100"
                    />
                    <span className="ml-5">30%</span>
                  </div>
                </a>
                <div className="col-span-1">
                  <a href="/til/1/certification">
                    <button className="w-full h-full hover:bg-purple-700 border-2 border-purple-700 hover:text-white rounded-box">
                      <p className="text-5xl">+</p>
                      <p>인증하기</p>
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:grid md:grid-cols-4">
                <a href="/til/1" className="col-span-3 mp-3 hover:rotate-2">
                  <span className="ml-6 text-lg leading-6 font-medium text-gray-900">
                    CSS 익히기
                  </span>
                  <div className="mt-4 mb-2 ml-3">
                    <span className="ml-3 text-base text-gray-500">
                      인증성공 3회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      인증실패 1회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      남은인증 8회
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="mt-3 ml-6 text-base text-gray-500">
                      22. 01. 01 ~ 22. 02. 01
                    </span>
                    <span className="mt-2 ml-6 text-base text-gray-500 ml-5 ">
                      🗓 7일 뒤 종료
                    </span>
                  </div>
                  <div className="mt-2">
                    <progress
                      className="progress progress-primary w-56 ml-6"
                      value="30"
                      max="100"
                    />
                    <span className="ml-5">30%</span>
                  </div>
                </a>
                <div className="col-span-1">
                  <a href="/til/1/certification">
                    <button className="w-full h-full hover:bg-purple-700 border-2 border-purple-700 hover:text-white rounded-box">
                      <p className="text-5xl">+</p>
                      <p>인증하기</p>
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:grid md:grid-cols-4">
                <a href="/til/1" className="col-span-3 mp-3 hover:rotate-2">
                  <span className="ml-6 text-lg leading-6 font-medium text-gray-900">
                    CSS 익히기
                  </span>
                  <div className="mt-4 mb-2 ml-3">
                    <span className="ml-3 text-base text-gray-500">
                      인증성공 3회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      인증실패 1회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      남은인증 8회
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="mt-3 ml-6 text-base text-gray-500">
                      22. 01. 01 ~ 22. 02. 01
                    </span>
                    <span className="mt-2 ml-6 text-base text-gray-500 ml-5 ">
                      🗓 7일 뒤 종료
                    </span>
                  </div>
                  <div className="mt-2">
                    <progress
                      className="progress progress-primary w-56 ml-6"
                      value="30"
                      max="100"
                    />
                    <span className="ml-5">30%</span>
                  </div>
                </a>
                <div className="col-span-1">
                  <a href="/til/1/certification">
                    <button className="w-full h-full hover:bg-purple-700 border-2 border-purple-700 hover:text-white rounded-box">
                      <p className="text-5xl">+</p>
                      <p>인증하기</p>
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:grid md:grid-cols-4">
                <a href="/til/1" className="col-span-3 mp-3 hover:rotate-2">
                  <span className="ml-6 text-lg leading-6 font-medium text-gray-900">
                    CSS 익히기
                  </span>
                  <div className="mt-4 mb-2 ml-3">
                    <span className="ml-3 text-base text-gray-500">
                      인증성공 3회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      인증실패 1회
                    </span>
                    <span className="ml-3 text-base text-gray-500">|</span>
                    <span className="ml-3 text-base text-gray-500">
                      남은인증 8회
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="mt-3 ml-6 text-base text-gray-500">
                      22. 01. 01 ~ 22. 02. 01
                    </span>
                    <span className="mt-2 ml-6 text-base text-gray-500 ml-5 ">
                      🗓 7일 뒤 종료
                    </span>
                  </div>
                  <div className="mt-2">
                    <progress
                      className="progress progress-primary w-56 ml-6"
                      value="30"
                      max="100"
                    />
                    <span className="ml-5">30%</span>
                  </div>
                </a>
                <div className="col-span-1">
                  <a href="/til/1/certification">
                    <button className="w-full h-full hover:bg-purple-700 border-2 border-purple-700 hover:text-white rounded-box">
                      <p className="text-5xl">+</p>
                      <p>인증하기</p>
                    </button>
                  </a>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default TILHomePresenter;
