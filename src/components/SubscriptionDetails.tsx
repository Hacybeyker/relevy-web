import React from 'react';

export function SubscriptionDetails() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-background-light/80 dark:bg-background-dark/80 p-4">
      {/* Modal Container */}
      <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-ui-light dark:bg-zinc-900 shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10">
        {/* Toolbar */}
        <div className="flex justify-end p-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-text-light-secondary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        {/* Profile Header & Key Details Section */}
        <div className="flex flex-col items-center px-6 pb-6 text-center">
          {/* Profile Header */}
          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl h-24 w-24 border dark:border-zinc-800"
                data-alt="Netflix logo"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCF9BuiTY_YvzKbHqFe0gNotak1Gw6c63zbq0ueGmntm51TCwKSnQh__Yfte1yTdHGQyYgsDVTdsBv-v2FMujtC9vIZJRuVTw8ka2-lfmgLQn7qWPoKqXFjZW_psZ2hvZ5xs1oBQ09ZJbU6n-dL8WpEF9abPzGQpSNijIA45NuaKJchvfNvLgLT5Md0bhaW6JRRbfZcTenC7ahxOjqZrxMZwJLjtZ2JjlYTnBmKHOvkiuTsb1tkpGmUaofqDhgtFegZ3rmAoEGd_fg")',
                }}
              ></div>
              <p className="text-2xl font-bold leading-tight tracking-tight text-text-light-primary dark:text-white">
                Netflix
              </p>
            </div>
          </div>
          {/* Headline Text */}
          <h1 className="text-4xl font-bold tracking-tight text-text-light-primary dark:text-white pt-4">
            $15.49 / Monthly
          </h1>
          {/* Chips */}
          <div className="flex gap-3 pt-4">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#6EE7B7]/20 px-4">
              <p className="text-sm font-medium leading-normal text-[#065F46]">
                Active
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="px-6">
          <hr className="border-border-light dark:border-zinc-800" />
        </div>
        {/* Information Section */}
        <div className="flex flex-col gap-4 p-6">
          {/* Description List */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-x-6 py-2">
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-gray-400">
                Next payment
              </p>
              <p className="text-sm font-medium leading-normal text-text-light-primary dark:text-gray-100 text-right">
                Dec 24, 2024
              </p>
            </div>
            <div className="flex justify-between gap-x-6 py-2">
              <p className="text-sm font-normal leading-normal text-text-light-secondary dark:text-gray-400">
                Category
              </p>
              <p className="text-sm font-medium leading-normal text-text-light-primary dark:text-gray-100 text-right">
                Entertainment
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="px-6">
          <hr className="border-border-light dark:border-zinc-800" />
        </div>
        {/* Reminders Section */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-text-light-primary dark:text-gray-100">
              Reminders
            </p>
            <label className="flex items-center cursor-pointer relative">
                <input
                type="checkbox"
                className="sr-only peer"
                defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--color-primary)]/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--color-primary)]"></div>
            </label>
          </div>
        </div>
        {/* Actions Section */}
        <div className="flex flex-col gap-3 bg-gray-50 dark:bg-zinc-900/50 p-6">
          <button className="flex h-11 items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 text-base font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
            Edit Subscription
          </button>
          <button className="flex h-11 items-center justify-center rounded-lg bg-gray-200 dark:bg-zinc-800 px-6 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
            Mark as Canceled
          </button>
          <button className="flex h-11 items-center justify-center rounded-lg px-6 text-base font-medium text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
