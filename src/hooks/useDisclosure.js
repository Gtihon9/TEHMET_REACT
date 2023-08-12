import { useState, useCallback } from "react"

export function useDisclosure(initialState = false) {
   const [isOpen, setIsOpen] = useState(initialState);

   const open = useCallback(() => setIsOpen(true), []);
   const close = useCallback(() => setIsOpen(false), []);
   const toggle = useCallback(() => setIsOpen((prevState) => !prevState), []);

   return {
      isOpen,
      onOpen: open,
      onClose: close,
      onToggle: toggle,
   };
}

export default useDisclosure;