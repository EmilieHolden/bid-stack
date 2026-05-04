export function registerForm() {
    return `
      <div id="register-form-wrapper">
        <h2 class="mb-3 text-xl text-white font-bold font-heading">Register account</h2>
  
        <form class="space-y-2.5 text-sm">
          <div class="flex flex-col">
            <label for="register-username">Username</label>
            <input type="text" id="register-username" name="username" required class="input"/>
          </div>
  
          <div class="flex flex-col">
            <label for="register-password">Password</label>
            <input type="password" id="register-password" name="password" minlength="8" required class="input"/>
          </div>
  
          <div class="flex flex-col">
            <label for="register-avatarImgUrl">Avatar Photo URL</label>
            <input type="url" id="register-avatarImgUrl" name="avatarImgUrl" class="input"/>
          </div>
  
          <button type="submit" class="btn-secondary">Create account</button>
        </form>
      </div>
    `;
}