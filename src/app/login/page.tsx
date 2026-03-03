import React from "react";

export default function LoginPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex h-full grow flex-col">
        <div className="px-4 flex flex-1 justify-center items-center py-10 sm:py-20">
          <div className="flex flex-col w-full max-w-md flex-1">
            {/* Logo Component */}
            <div className="flex flex-col items-center justify-center gap-4 px-4 pb-8 pt-6">
              <div className="flex items-center gap-2">
                <svg
                  className="h-8 w-8 text-[var(--color-primary)]"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <h1 className="text-text-light-primary dark:text-text-dark-primary text-[32px] font-bold tracking-tighter">
                  Relevy
                </h1>
              </div>
            </div>
            {/* Card Container */}
            <div className="w-full grow bg-card-bg-light dark:bg-card-bg-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 sm:p-8">
              <div className="flex flex-col gap-6">
                {/* Headline */}
                <h1 className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-[28px] font-bold leading-tight text-center">
                  Bienvenido a Relevy
                </h1>
                {/* Form */}
                <div className="flex flex-col gap-4">
                  {/* Email Field */}
                  <label className="flex flex-col flex-1">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                      Email
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark h-14 placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary p-[15px] text-base font-normal leading-normal"
                      placeholder="Ingresa tu email"
                      type="email"
                      defaultValue=""
                    />
                  </label>
                  {/* Password Field */}
                  <label className="flex flex-col flex-1">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                      Contraseña
                    </p>
                    <div className="flex w-full flex-1 items-stretch rounded-lg">
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark h-14 placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        defaultValue=""
                      />
                      <div className="text-text-light-secondary dark:text-text-dark-secondary flex border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                        <span className="material-symbols-outlined cursor-pointer">
                          visibility
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                {/* Forgot Password Link */}
                <div className="flex justify-end px-1">
                  <a
                    className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                    href="#"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                {/* Login Button */}
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[var(--color-primary)] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] transition-colors duration-200">
                  <span className="truncate">Iniciar Sesión</span>
                </button>
                {/* Divider */}
                <div className="flex items-center gap-4">
                  <hr className="flex-1 border-t border-border-light dark:border-border-dark" />
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
                    O continúa con
                  </p>
                  <hr className="flex-1 border-t border-border-light dark:border-border-dark" />
                </div>
                {/* Social Logins */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark h-12 px-5 text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal hover:bg-background-light dark:hover:bg-background-dark transition-colors duration-200">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_101_32)">
                        <path
                          d="M22.5714 12.2727C22.5714 11.4545 22.5 10.6364 22.3571 9.81818H12V14.4545H18.0714C17.8214 15.9545 17.0357 17.2727 15.8214 18.0727V20.7273H19.5C21.4643 18.9545 22.5714 15.8864 22.5714 12.2727Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M12 23.1818C15.1429 23.1818 17.75 22.1364 19.5 20.7273L15.8214 18.0727C14.7143 18.8182 13.4286 19.2273 12 19.2273C9.03571 19.2273 6.46429 17.2273 5.53571 14.7H1.75V17.4273C3.53571 20.8409 7.42857 23.1818 12 23.1818Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M5.53571 14.7C5.32143 14.0455 5.17857 13.3636 5.17857 12.6364C5.17857 11.9091 5.32143 11.2273 5.53571 10.5727V7.84545H1.75C0.928571 9.40909 0.428571 10.9773 0.428571 12.6364C0.428571 14.2955 0.928571 15.8636 1.75 17.4273L5.53571 14.7Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M12 6.04545C13.5714 6.04545 14.9286 6.59091 15.9643 7.59091L19.5714 4.02273C17.75 2.29545 15.1429 1.09091 12 1.09091C7.42857 1.09091 3.53571 3.43182 1.75 6.84545L5.53571 9.57273C6.46429 7.04545 9.03571 6.04545 12 6.04545Z"
                          fill="#EA4335"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_101_32">
                          <rect fill="white" height="24" width="24"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="truncate">Google</span>
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark h-12 px-5 text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal hover:bg-background-light dark:hover:bg-background-dark transition-colors duration-200">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.4293 16.2238C17.4334 16.2223 17.4376 16.2208 17.4418 16.2193C17.4418 16.2193 17.4418 16.2193 17.4418 16.2193C18.6334 14.538 19.3444 12.5645 19.3444 10.6385C19.3444 6.42571 16.1438 4.21852 15.9238 4.06283C14.072 2.76611 11.9655 2.53125 10.3341 4.04354C9.37326 4.90854 8.7844 6.07525 8.74088 7.33825C8.73674 7.3516 8.7332 7.36502 8.72966 7.37844C7.03415 7.82844 5.92415 9.44497 5.92415 11.2335C5.92415 13.5658 7.6254 15.2215 9.87326 15.2422C10.0461 15.2437 10.2183 15.2346 10.3876 15.2165L10.457 15.2093C11.6661 15.0215 12.6394 15.7193 13.3876 16.7122C14.0769 17.6266 14.6181 18.6658 15.4841 19.4622C15.8644 19.8246 16.2576 20.1855 16.6661 20.5435C15.9926 21.1396 15.2755 21.6508 14.4981 22.0435C13.8834 22.3615 13.2519 22.6108 12.6076 22.7722C12.4461 22.8222 12.2805 22.8593 12.1126 22.8843C12.0626 22.8922 12.0134 22.8986 11.9641 22.9043C11.9541 22.9058 11.9441 22.9065 11.9341 22.9072C11.9312 22.9072 11.9291 22.9072 11.9261 22.9072L11.9205 22.9072C9.4089 22.548 7.6089 20.6122 7.55015 18.0622H7.5543C7.5756 18.1065 7.59974 18.1501 7.6254 18.1922C8.90015 20.2222 11.0261 21.438 13.5189 21.438C14.0489 21.438 14.5705 21.3658 15.0741 21.2296C15.2005 21.1922 15.3261 21.1522 15.4505 21.1096C15.5397 21.0779 15.6284 21.0455 15.7161 21.0122L15.7461 21.0007C16.5926 20.6693 17.4081 20.1743 18.1696 19.5393L18.2326 19.488L18.2811 19.4446C19.2076 18.6607 19.9326 17.6527 20.4284 16.5058C19.1413 15.7516 17.6749 15.7288 17.4293 16.2238ZM13.8819 1.13844C15.6869 -0.0623125 18.0193 -0.384562 19.7905 1.18997C19.8243 1.2166 19.8576 1.24394 19.8905 1.27197C21.6544 2.82844 22.0469 5.1097 20.8656 6.90497C19.6894 8.688 17.4081 9.49344 15.6144 8.28697C13.8156 7.08044 13.1256 4.80197 14.3406 3.018C14.4926 2.808 14.6543 2.60725 14.8255 2.41625C14.5791 2.22415 14.3219 2.0428 14.0561 1.87415C13.9961 1.8328 13.9369 1.79225 13.8776 1.75225C13.6234 1.58354 13.3594 1.43909 13.0869 1.32209C13.3519 1.24434 13.6169 1.17854 13.8819 1.13844Z"></path>
                    </svg>
                    <span className="truncate">Apple</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
