
const Form = ({ form, handleSubmit }) => {
  return (
      <div className="w-[50%] itemSpan space-y-5 text-start p-2">
          <p className="text-forest dark:text-gold-dark tracking-wider font-mono">GET IN TOUCH</p>
          <h1 className="text-2xl lg:text-3xl font-mono font-semibold">Let's work together</h1>
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-5 itemSpan">
              <span className="flex flex-col gap-2 itemSpan">
                  <label htmlFor="name">Name</label>
                  <input name="name" className="border outline-none itemSpan bg-surface border-line dark:bg-surface-2-dark p-2 rounded-xl dark:border-ink-soft" type="text" placeholder="Enter your name" />
              </span>

              <span className="flex flex-col gap-2 itemSpan">
                  <label htmlFor="email">Email</label>
                  <input name="email" className="border outline-none itemSpan bg-surface border-line dark:bg-surface-2-dark p-2 rounded-xl dark:border-ink-soft" type="text" placeholder="Enter your email" />
              </span>

              <span className="flex flex-col gap-2 itemSpan">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" className="border outline-none itemSpan bg-surface border-line h-30 dark:bg-surface-2-dark p-2 rounded-xl dark:border-ink-soft" placeholder="Write your message here"></textarea>
              </span>

              <button disabled={sending} type="submit" className="bg-forest dark:bg-gold-dark font-bold w-fit rounded-xl text-bg dark:text-forest-dark p-2 h-fit"> 
                {sending ? "Sending..." : "Send message"}
              </button>
          </form>
      </div>

  )
}

export default Form
