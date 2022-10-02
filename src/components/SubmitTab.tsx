import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from '@chakra-ui/react'

const SubmitTab: React.FC<{}> = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const toggleModal = () => { setShowModal(!showModal)}

  return (
    <div>
    <div className="fixed bg-black top-64 right-0 text-white -rotate-90 p-4 rounded-t-2xl min-w-fit hover:-translate-x-1 z-20 transition-all ease-in-out">
      <button onClick={() => toggleModal()}>Submit</button>
    </div>
    <Modal isOpen={showModal} onClose={toggleModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="text-black text-[36px]">Submit to NFTitties</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <h1>NFTitties invites artists from all fields to participate by submitting artworks of breasts. The proceeds from the sale are divided equitably between the participating artist, charity, the
          NFTitties project, and a Community Treasury.</h1>
        </ModalBody>
        <ModalFooter>
        <a href="https://m5e7vfqi158.typeform.com/to/dHSthGvn?typeform-source=nftitties.space" target="_blank" rel="noopener noreferrer"><span className="bg-black py-2 px-3 text-white rounded-2xl">Submission Form</span></a>
        </ModalFooter>
        <br></br>
        </ModalContent>
      </Modal>
    </div>
  )
}
export default SubmitTab