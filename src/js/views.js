export function homeView() {
    return '<div class="flex flex-col gap-9 items-center"><h1 class="pt-52 text-xl font-heading text-white">Ready to start bidding?</h1><button class="btn">Go to listings</button></div>';
}

export function listingsView() {
    return '<main class="mx-auto w-full max-w-lg"><h1>Listings</h1><div class="listing-card" > <div class="w-full"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt=""></div><div class="flex flex-col py-2 px-3 w-full"><div><p class="text-sm text-white font-heading">Flamingo picture</p></div> <p class="text-xs text-light-grey">Short description of product</p><div><p class="text-xs text-light-grey">Current bid</p><p class="text-xl text-white">300$</p><p class="text-xs text-light-grey">Ends in 2 days</p></div><button class="btn w-full text-center">View product</button></div > </div></main>';
}

export function notFoundView() {
    return '<h1>404 - Page Not Found</h1>';
}

export function loginView() {
    return '<main class="mx-auto w-full max-w-lg flex-grow p-3 md:p-8"><section class="rounded-lg p-4 shadow-md"><div class="border-[0.5px] border-light-grey mb-6 flex rounded-md p-1"><button id="show-login" type="button" class="flex-1 rounded px-4 py-2 text-sm font-medium">Login</button><button id="show-register" type="button" class="flex-1 rounded px-4 py-2 text-sm font-medium">Register</button></div><div id="register-form-wrapper"><h2 class="mb-3 text-xl text-white font-bold font-heading">Register account</h2><form class="space-y-2.5 text-sm" action="/profile.html"><div class="flex flex-col"><label for="register-username">Username</label><input type="text" id="register-username" name="username" required class="input"/></div><div class="flex flex-col"><label for="register-password">Password</label><input type="password" id="register-password" name="password" minlength="8" required class="input"/></div><div class="flex flex-col"><label for="register-avatarImgUrl">Avatar Photo URL</label><input type="url" id="register-avatarImgUrl" name="avatarImgUrl" class="input"/></div><button type="submit" class="btn-secondary">Create account</button></form></div><div id="login-form-wrapper" class="hidden"><h2 class="mb-3 text-xl font-bold font-heading">Login</h2><form class="space-y-2.5 text-sm" action="/profile.html"><div class="flex flex-col"><label for="login-email">Email</label><input type="email" id="login-email" name="email" required class="input"/></div><div class="flex flex-col"><label for="login-password">Password</label><input type="password" id="login-password" name="password" minlength="8" required class="input"/></div><button type="submit" class="btn-secondary">Login</button></form> </div></section></main>';
} 