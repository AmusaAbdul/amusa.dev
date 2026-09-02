
const Social = () => {
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

  return (
      <div className="w-[50%] project-card bg-forest  font-bold  rounded-xl text-bg  p-4 h-fit">
          <h1 className="text-xl font-mono">Prefer to reach out directly?</h1>
          <p className="p-2 text-sm tracking-wide font-mono">Open to frontend roles, freelance projects, and collaborations.</p>
          <div className="mt-50 flex justify-between items-center">
              <button className="bg-green-500 rounded-xl text-white p-2 hover:transform-[scale(1.05)]" onClick={() => openLink("https://wa.me/23408156345656")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img"
                      aria-labelledby="waOutline">
                      <title id="waOutline">WhatsApp icon</title>
                      <path
                          d="M20.52 3.48A11.95 11.95 0 0 0 12 .5 11.95 11.95 0 0 0 3.48 3.48 11.95 11.95 0 0 0 .5 12c0 2.1.56 4.08 1.62 5.83L.5 23l4.51-1.4A11.95 11.95 0 0 0 12 23.5c3.18 0 6.16-1.24 8.52-3.48A11.95 11.95 0 0 0 23.5 12 11.95 11.95 0 0 0 20.52 3.48zM12 21c-8 0-9-7-9-9a9 9 0 0 1 18 0c0 2-1 9-9 9z"
                          fill="currentColor" />
                      <path
                          d="M17 14.5c-.5-.3-2.9-1.5-3.4-1.6-.5-.1-1-.1-1.5.5-.5.6-.6 1-1.4 1.1-.8.1-1.7-.7-3.6-2.6-1.4-1.4-2-2.9-1.8-3.6.2-.6.8-1 1.1-1.3.3-.3.6-.4 1-.5.3-.1.6 0 .9.4.2.3.6 1 1 1.6.4.6.8 1 .9 1.2.1.2.1.3 0 .6-.1.3-.2.6-.3.9-.1.3 0 .6.3.9.4.4 1 .8 1.7 1.2.7.4 1.3.5 1.8.4.5-.1 1-.4 1.3-.6.2-.2.3-.3.6-.1.2.2 1 1.2 1.2 1.5.2.3.3.5.2.7-.1.2-.6.4-1.1.1z"
                          fill="currentColor" />
                  </svg>
              </button>
              <button className="bg-[#3d5a98] rounded-xl text-white p-2 hover:transform-[scale(1.05)]"
                  onClick={() => openLink("https://www.facebook.com/share/1CM8rFF9Gn/?mibextid=wwXIfr")}>
                  <svg viewBox="0 0 128 128" width="27" height="27">
                      <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                  </svg>
              </button>
              <button className="bg-black rounded-xl text-white p-2 hover:transform-[scale(1.05)]"
                  onClick={() => openLink("https://x.com/slime_bruno")}>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path
                          d="M18.244 2H21.5l-7.52 8.59L23 22h-6.844l-5.351-6.934L4.5 22H1.243l8.033-9.17L1 2h6.97l4.743 6.231L18.244 2zm-2.404 17.403h1.799L7.516 4.51H5.59l10.25 14.893z" />
                  </svg>
              </button>
              <button className="bg-blue-500 rounded-xl text-white p-2 hover:transform-[scale(1.05)]"
                  onClick={() => openLink("https://www.linkedin.com/in/amusa-abdullah-962b0938a/")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
              </button>
          </div>
      </div>
  )
}

export default Social
