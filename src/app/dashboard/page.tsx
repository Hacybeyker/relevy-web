import { Header } from "@/components/Header";

export default function DashboardPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-screen-xl flex-1">
            <Header />
            <main className="flex-1 mt-8">
              <div className="flex flex-col md:flex-row flex-wrap gap-6">
                <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark shadow-sm">
                  <p className="text-base font-medium leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                    Total Monthly Spend
                  </p>
                  <p className="tracking-tight text-4xl font-bold leading-tight text-text-light-primary dark:text-text-dark-primary">
                    $128.50
                  </p>
                </div>
                <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark shadow-sm">
                  <p className="text-base font-medium leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                    Next Charge
                  </p>
                  <p className="tracking-tight text-4xl font-bold leading-tight text-text-light-primary dark:text-text-dark-primary">
                    $14.99
                  </p>
                </div>
                <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-mint-green/20 dark:bg-mint-green/10 shadow-sm">
                  <p className="text-base font-medium leading-normal text-green-800 dark:text-mint-green">
                    Estimated Savings
                  </p>
                  <p className="tracking-tight text-4xl font-bold leading-tight text-green-900 dark:text-white">
                    $25.00
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-1 flex flex-col gap-4">
                  <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] px-2 text-text-light-primary dark:text-text-dark-primary">
                    Upcoming Payments
                  </h2>
                  <div className="flex flex-col gap-2 rounded-xl p-4 border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark shadow-sm">
                    {/* Payment Item */}
                    <div className="flex items-center gap-4 px-2 py-3 justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDg0J5TUQs-1orbo5AIcpQAt6R7zCiykwRntf8vyTMSAhhSVxvxxgo9Q_Q-Vqkf_eP7t3uocV3huTPmXgZg12qvPOeusWGQpy-zOz3PSgdPmbPG35qxtsdRbUspF4Bp6Z6F7wSnuPiYuq_8uQeiEH9kL6pd9FSyGlR-G6ZNnYtNvELvn_nqitk20hxMDMugaqDiegK89sfsha4SW1EZGMkmQxQDSbjRWzkRgUY8qD8iSKdtwenE6uk2Op5E5caanfcLzd1gv19cZGM")',
                          }}
                        ></div>
                        <p className="text-base font-medium leading-normal flex-1 truncate text-text-light-primary dark:text-text-dark-primary">
                          Netflix
                        </p>
                      </div>
                      <div className="shrink-0">
                        <p className="text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                          $15.49 on Jun 22
                        </p>
                      </div>
                    </div>
                    {/* Payment Item */}
                    <div className="flex items-center gap-4 px-2 py-3 justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3CURs5B8R4fYQt7pC50lgjqiEP0sqvwPwI67kXmeWh4XQbG56JgI-BClCf0r9wsM1t5mc-nDoCG4QToK929QZp0LKOGrxHCX7mnGu4Kc-Iva-T_i2wgaFzQjxNa7Eip5qfSL8UopFs1MWYDANU8dZ7FXpdQfnOykusjDMqiAH3XGsfh0kFdYoTOGLsDR4iDVQRvlAy5efsaXbhYns2iazZLfpPmH6hn2c2_aQZJnc79sx6z7SM0pwj_7U_maVzczJh36dQzI1TBc")',
                          }}
                        ></div>
                        <p className="text-base font-medium leading-normal flex-1 truncate text-text-light-primary dark:text-text-dark-primary">
                          Spotify
                        </p>
                      </div>
                      <div className="shrink-0">
                        <p className="text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                          $10.99 on Jun 25
                        </p>
                      </div>
                    </div>
                    {/* Payment Item */}
                    <div className="flex items-center gap-4 px-2 py-3 justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDI116ZdvEv-tMgJKR-f0of2i0itdKYhcoAGMowmfpsQJSyf0ua7W4xWm_oa1MXEHtKNv60VEw7wxwp4cUvGKBrhIueMlzEELLTYi_FF6cgfRN08UKHSYXE1BatOtI0tMveR2NLIqRDx_asHjxq0tpCL90uER8RydfMk7SQMkBnpzpylDpauvOEnUTg2L0W5bgkcv1zbrN9CBtQBvhwHHS44wsCMufPGMhM5I1fe29om4omims4doYcgzoQ2VAO9S1by-KeuSUVLx0")',
                          }}
                        ></div>
                        <p className="text-base font-medium leading-normal flex-1 truncate text-text-light-primary dark:text-text-dark-primary">
                          Adobe CC
                        </p>
                      </div>
                      <div className="shrink-0">
                        <p className="text-base font-normal leading-normal text-text-light-secondary dark:text-text-dark-secondary">
                          $52.99 on Jul 01
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 flex flex-col gap-4">
                  <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] px-2 text-text-light-primary dark:text-text-dark-primary">
                    Your Subscriptions
                  </h2>
                  <div className="flex flex-col gap-6 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-bg-light dark:bg-card-bg-dark shadow-sm">
                    <div className="flex flex-col gap-4">
                      <p className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">
                        Spending by Category
                      </p>
                      <div className="w-full flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-24 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                            Entertainment
                          </span>
                          <div className="flex-1 bg-background-light dark:bg-background-dark rounded-full h-4">
                            <div
                              className="bg-[var(--color-primary)] h-4 rounded-full"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                          <span className="w-16 text-right font-semibold text-text-light-primary dark:text-text-dark-primary">
                            $74.98
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-24 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                            Productivity
                          </span>
                          <div className="flex-1 bg-background-light dark:bg-background-dark rounded-full h-4">
                            <div
                              className="bg-[var(--color-primary)] h-4 rounded-full"
                              style={{ width: "35%" }}
                            ></div>
                          </div>
                          <span className="w-16 text-right font-semibold text-text-light-primary dark:text-text-dark-primary">
                            $52.99
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-24 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                            Music
                          </span>
                          <div className="flex-1 bg-background-light dark:bg-background-dark rounded-full h-4">
                            <div
                              className="bg-[var(--color-primary)] h-4 rounded-full"
                              style={{ width: "5%" }}
                            ></div>
                          </div>
                          <span className="w-16 text-right font-semibold text-text-light-primary dark:text-text-dark-primary">
                            $10.99
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
