import React from "react";
const profile = {
  coverImageUrl:
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

function DetailHomePresenter(props) {
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
          <div className="md:grid md:grid-cols-6">
            <div className="col-span-2 mb-3">
              <span className="ml-6 text-lg leading-6 font-medium text-gray-900">
                CSS 익히기
              </span>
              <div className="mt-4 mb-2 ml-6 mr-3">
                <span className="text-base text-gray-500">인증성공 3회</span>
                <span className="ml-3 text-base text-gray-500">|</span>
                <span className="ml-3 text-base text-gray-500">
                  인증실패 1회
                </span>
                <span className="ml-3 text-base text-gray-500">|</span>
                <span className="ml-3 text-base text-gray-500">
                  남은인증 8회
                </span>
              </div>
              <div className="mt-1 mr-6 ml-6">
                <span className="mt-3 text-base text-gray-500">
                  22. 01. 01 ~ 22. 02. 01
                </span>
                <span className="mt-2 ml-6 text-base text-gray-500 ml-5 ">
                  🗓 7일 뒤 종료
                </span>
              </div>
              <div className="mt-2 ml-6 mr-6">
                <progress
                  className="progress progress-primary w-56 "
                  value="30"
                  max="100"
                />
                <span className="ml-5">30%</span>
              </div>
            </div>
            <div className="col-span-2">
              <span className="ml-6 text-lg leading-6 font-medium text-gray-900" />
              <div className="mt-4 mb-2 ml-6 mr-6">
                <div className="text-base text-gray-500">
                  CSS 등장부터 ~ 반응형 디자인 까지 알아보자 적당히 길게 적으면
                  어떻게 되는지 궁금해서 적어보는 내용
                </div>
              </div>
            </div>
            <div className="col-span-2 pr-10 pl-10">
              <a href="/til/1/certification">
                <button className=" w-full h-full hover:bg-purple-700 bg-purple-600 text-white rounded-box">
                  <p className="text-5xl">+</p>
                  <p>인증하기</p>
                </button>
              </a>
            </div>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        자바스크립트 1일
                      </a>
                    </h3>

                    <p className="text-sm font-medium text-gray-900">
                      ES6 arrow functon 공부
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      14 : 05 ~ 16 : 13 (01시간 08분)
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    22. 01. 03 (금)
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        자바스크립트 1일
                      </a>
                    </h3>

                    <p className="text-sm font-medium text-gray-900">
                      ES6 arrow functon 공부
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      14 : 05 ~ 16 : 13 (01시간 08분)
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    22. 01. 03 (금)
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        자바스크립트 1일
                      </a>
                    </h3>

                    <p className="text-sm font-medium text-gray-900">
                      ES6 arrow functon 공부
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      14 : 05 ~ 16 : 13 (01시간 08분)
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    22. 01. 03 (금)
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        자바스크립트 1일
                      </a>
                    </h3>

                    <p className="text-sm font-medium text-gray-900">
                      ES6 arrow functon 공부
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      14 : 05 ~ 16 : 13 (01시간 08분)
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    22. 01. 03 (금)
                  </p>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailHomePresenter;
