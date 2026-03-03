import { Header } from "@/components/Header";

export default function SettingsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-text-light-primary dark:text-text-dark-primary">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="px-4 sm:px-6 flex flex-1 justify-center py-8 sm:py-12">
          <div className="layout-content-container flex flex-col w-full max-w-screen-xl flex-1 gap-8">
            <div className="flex flex-wrap justify-between gap-3 px-4">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                Ajustes
              </h1>
            </div>
            <div className="flex flex-col gap-8">
              {/* Profile Settings Card */}
              <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-card-bg-light dark:bg-card-bg-dark border border-border-light dark:border-border-dark p-6 sm:p-8">
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                  Perfil
                </h2>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-1 mb-6">
                  Gestiona tu información personal.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-end gap-4">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-sm font-medium leading-normal pb-2">
                      Nombre
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary px-4 text-base font-normal leading-normal"
                      defaultValue="Ana"
                    />
                  </label>
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-sm font-medium leading-normal pb-2">
                      Apellido
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary px-4 text-base font-normal leading-normal"
                      defaultValue="De Armas"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap items-end gap-4 mt-4">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-sm font-medium leading-normal pb-2">
                      Dirección de Correo Electrónico
                    </p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary px-4 text-base font-normal leading-normal"
                      defaultValue="ana.de.armas@email.com"
                    />
                  </label>
                </div>
                <div className="mt-8 flex justify-end">
                  <button className="flex items-center justify-center rounded-lg h-12 bg-[var(--color-primary)] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-6 transition-transform hover:scale-105 active:scale-100">
                    Guardar Cambios
                  </button>
                </div>
              </div>

              {/* Notifications Settings Card */}
              <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-card-bg-light dark:bg-card-bg-dark border border-border-light dark:border-border-dark p-6 sm:p-8">
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                  Notificaciones
                </h2>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-1 mb-6">
                  Elige qué notificaciones quieres recibir.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium">
                        Recordatorios de Próximos Pagos
                      </p>
                      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                        Recibe un aviso unos días antes de un cobro.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer relative">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--color-primary)]/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--color-primary)]"></div>
                    </label>
                  </div>
                  <div className="border-t border-border-light dark:border-border-dark"></div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium">Alertas de Aumento de Precio</p>
                      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                        Te avisaremos si el precio de una suscripción cambia.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer relative">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--color-primary)]/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--color-primary)]"></div>
                    </label>
                  </div>
                  <div className="border-t border-border-light dark:border-border-dark"></div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium">Resumen Semanal de Gastos</p>
                      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                        Recibe un informe de tus gastos cada semana.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--color-primary)]/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--color-primary)]"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Security Settings Card */}
              <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm bg-card-bg-light dark:bg-card-bg-dark border border-border-light dark:border-border-dark p-6 sm:p-8">
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                  Seguridad
                </h2>
                <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-1 mb-6">
                  Administra la seguridad de tu cuenta.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between py-2">
                    <p className="font-medium mb-2 sm:mb-0">
                      Cambiar Contraseña
                    </p>
                    <button className="flex w-full sm:w-auto items-center justify-center rounded-lg h-11 bg-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/30 text-[var(--color-primary)] gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-6 hover:bg-[var(--color-primary)]/30 dark:hover:bg-[var(--color-primary)]/40">
                      Cambiar
                    </button>
                  </div>
                  <div className="border-t border-border-light dark:border-border-dark"></div>
                  <div className="flex flex-col sm:flex-row items-center justify-between py-2">
                    <p className="font-medium mb-2 sm:mb-0">Cerrar Sesión</p>
                    <button className="flex w-full sm:w-auto items-center justify-center rounded-lg h-11 bg-gray-500/10 dark:bg-gray-400/20 text-text-light-secondary dark:text-text-dark-secondary gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-6 hover:bg-gray-500/20 dark:hover:bg-gray-400/30">
                      Cerrar Sesión
                    </button>
                  </div>
                  <div className="border-t border-border-light dark:border-border-dark"></div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-[#E53E3E]">
                        Eliminar Cuenta
                      </p>
                      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mt-1">
                        Esta acción es permanente y no se puede deshacer.
                      </p>
                    </div>
                    <button className="flex w-full sm:w-auto mt-3 sm:mt-0 items-center justify-center rounded-lg h-11 bg-[#E53E3E]/20 text-[#E53E3E] gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-6 hover:bg-[#E53E3E]/30">
                      Eliminar mi Cuenta
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
