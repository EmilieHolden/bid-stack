export const userFeedbackMessage = (type, message) => {
    return `
        <div class="p-2 rounded-sm ${type === "success" ? 'bg-green-500' : 'bg-red-500'}">
          <p class="text-white">
           ${message}
          </p>
        </div>
      `
}