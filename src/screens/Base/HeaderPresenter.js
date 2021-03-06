/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../atoms/atom";
import moment from "moment";

const features = [
  // { name: "😎 About Us", href: "team" },
  { name: "🧑‍💻 Today I Learned (TIL)", href: "til" },
];

export default function Example() {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(isLoginAtom);
  const setIsLogin = useSetRecoilState(isLoginAtom);
  if (localStorage.length !== 0) {
    let { expireAT } = JSON.parse(localStorage.getItem("accessToken"));
    if (moment(expireAT).diff(moment()) < 0) {
      setIsLogin(false);
    }
  } else {
    setIsLogin(false);
  }
  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <div className="relative bg-gray-80">
      <Popover className="relative bg-white border-b-2 border-b-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <div className="flex space-x-0.5 flex-wrap">
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                </div>
                <div className="flex space-x-0.5 flex-wrap pt-0.5">
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                </div>
                <div className="flex space-x-0.5 pt-0.5">
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                </div>
                <div className="flex space-x-0.5 pt-0.5">
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                </div>
                <div className="flex space-x-0.5 pt-0.5">
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700-300 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                </div>
                <div className="flex space-x-0.5 pt-0.5">
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                </div>
                <div className="flex space-x-0.5 pt-0.5">
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                  <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                </div>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white px-4 inline-flex  items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {/* <Link
                to="/team"
                className="text-base font-medium text-gray-500 hover:text-purple-700"
              >
                😎 About Us
              </Link> */}
              <Link
                to="/til"
                className="text-base font-medium text-gray-500 hover:text-purple-700"
              >
                🧑‍💻 Today I Learned (TIL)
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {!isLogin ? (
                <>
                  <Link
                    to="/login"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    로그인
                  </Link>
                  <Link
                    to="/login"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-700"
                  >
                    회원가입
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/mypage"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-3"
                  >
                    마이페이지
                  </Link>
                  <div
                    onClick={logout}
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    로그아웃
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex space-x-0.5 flex-wrap">
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                    </div>
                    <div className="flex space-x-0.5 flex-wrap pt-0.5">
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                    </div>
                    <div className="flex space-x-0.5 pt-0.5">
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                    </div>
                    <div className="flex space-x-0.5 pt-0.5">
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                    </div>
                    <div className="flex space-x-0.5 pt-0.5">
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700-300 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                    </div>
                    <div className="flex space-x-0.5 pt-0.5">
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                    </div>
                    <div className="flex space-x-0.5 pt-0.5">
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border bg-purple-700 bg-purple-700" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                      <p className="w-1.5 h-1.5 border border-gray-200 bg-gray-100" />
                    </div>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <p className="text-center text-base font-medium text-gray-500">
                    {!isLogin ? (
                      <>
                        <Link
                          to="/login"
                          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                          로그인
                        </Link>
                        <Link
                          to="/login"
                          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-700"
                        >
                          회원가입
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/mypage"
                          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                          마이페이지
                        </Link>
                        <div
                          onClick={logout}
                          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                          로그아웃
                        </div>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
