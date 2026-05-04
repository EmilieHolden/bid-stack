import { authToggle, loginForm, registerForm } from "../components/index.js";


export function loginView() {
    return `
    <main class="mx-auto w-full max-w-lg flex-grow p-3 md:p-8">
      <section class="rounded-lg p-4 shadow-md">
        ${authToggle()}
        ${registerForm()}
        ${loginForm()}
      </section>
    </main>
  `;
}


