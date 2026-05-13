export function loginForm() {
  return `
      <div id="login-form-wrapper" class="hidden">
        <h2 class="mb-3 text-xl font-bold font-heading">Login</h2>
  
        <form id="login-form" class="space-y-2.5 text-sm">
          <div class="flex flex-col">
            <label for="login-email">Email</label>
            <input type="email" id="login-email" name="email" required class="input"/>
          </div>
  
          <div class="flex flex-col">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" name="password" minlength="8" required class="input"/>
          </div>
         
          <div id="login-message"></div>

          <button type="submit" class="btn-secondary">Login</button>
        </form>
      </div>
    `;
}