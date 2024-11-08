import React, {useRef,useState,useEffect} from 'react'
export default function OngoingAlert(props){
  const modalRefAlert = useRef(null); // Use ref instead of document.getElementById

  useEffect(() => {
      if (modalRefAlert.current) {
          if (props.trigger) {
              fadeIn(modalRefAlert.current);
          } else {
              fadeOut(modalRefAlert.current);
          }
      }
  }, [props.trigger]);

  function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
          if ((el.style.opacity -= 0.1) < 0) {
              el.style.display = "none";
              props.closeModal(); // Call close modal when completely hidden
          } else {
              requestAnimationFrame(fade);
          }
      })();
  }

  function fadeIn(el) {
      el.style.opacity = 0;
      el.style.display = "flex";
      (function fade() {
          let val = parseFloat(el.style.opacity);
          if (!((val += 0.2) > 1)) {
              el.style.opacity = val;
              requestAnimationFrame(fade);
          }
      })();
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
      setIsModalOpen(true);
  };
    return (
        <aside ref={modalRefAlert} className="fixed bottom-30 end-0 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white"
>
  <a href="#" rel="noreferrer" className="text-sm font-medium hover:opacity-75">
    This feature is under development 👋
  </a>

  <button onClick={() => props.closeModal()} className="rounded bg-white/20 p-1 hover:bg-white/10">
    <span className="sr-only">Close</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</aside>
    );
}