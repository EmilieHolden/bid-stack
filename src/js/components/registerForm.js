export const registerForm = () => {
  return `
      <div id="register-form-wrapper">
        <h2 class="mb-3 text-xl text-white font-bold font-heading">Register account</h2>
  
        <form id="register-form" class="space-y-2.5 text-sm">
          <div class="flex flex-col">
            <label for="register-username">Username</label>
            <input type="text" id="register-username" name="name" required class="input"/>
          </div>
  
          <div class="flex flex-col">
            <label for="register-email">Email</label>
            <input type="text" id="register-email" name="email" required class="input"/>
          </div>
  
          <div class="flex flex-col">
            <label for="register-password">Password</label>
            <input type="password" id="register-password" name="password" minlength="8" required class="input"/>
          </div>

          <div class="flex flex-col">
            <label for="banner">Banner URL</label>
            <input type="url" id="banner" name="banner" class="input"/>
          </div>

          <div id="register-message"></div>
  
          <button type="submit" class="btn-secondary">Create account</button>
        </form>
      </div>
    `;
}