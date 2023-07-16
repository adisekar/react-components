import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        Accept
      </Button>
    </div>
  );

  return (
    <div>
      <Button primary onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          Click on accept button to accept agreement
        </Modal>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        pellentesque rhoncus diam, ut elementum lectus bibendum non. Mauris non
        gravida quam. Aliquam posuere lectus vel enim fermentum, nec egestas
        enim auctor. Nullam vitae massa sit amet diam lobortis euismod. Cras at
        felis nec sapien pretium rutrum. Donec suscipit luctus ipsum, id congue
        augue ultrices vel. Sed at tincidunt est. Ut sit amet quam ut arcu
        varius pretium eu id lacus. Pellentesque congue risus quis turpis
        tempor, vitae accumsan justo convallis. Proin leo velit, tempor quis mi
        sit amet, sodales condimentum metus. Donec eu nisl vel urna pretium
        egestas. Nunc libero sapien, facilisis a consequat eu, luctus id est.
        Curabitur cursus dui augue, ut pharetra erat cursus accumsan. In
        efficitur nulla ultrices, auctor velit ac, luctus dolor. Donec auctor ac
        mi nec luctus. Donec efficitur ac lacus in mattis. Etiam sollicitudin
        euismod ante. Vestibulum dolor ligula, congue vel massa eget, suscipit
        ultricies leo. Curabitur pretium, odio sit amet molestie mollis, ex erat
        eleifend tortor, sit amet bibendum libero libero eget nulla. Cras
        tincidunt massa ac leo maximus iaculis. Proin pharetra purus eu maximus
        consequat. Vestibulum vitae vulputate ex. Phasellus commodo tristique
        rhoncus. Donec a nisi massa. Fusce nulla est, dignissim at dignissim
        nec, consectetur eu orci. Donec vel euismod ligula. Aliquam congue
        tellus quis nisi ultricies lobortis luctus pretium lacus. Donec ut nibh
        dictum, ornare sapien ut, fringilla mi. Ut eget mauris enim. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Etiam leo mauris, egestas eu tortor vel, accumsan
        maximus diam. Etiam ut ultricies nibh. Aliquam augue massa, blandit ut
        libero et, elementum mollis lorem. Morbi interdum erat ac scelerisque
        euismod. Duis egestas ipsum ac dui pharetra consectetur. Fusce eu lectus
        et nulla dapibus consequat. Duis finibus velit nec erat finibus
        hendrerit. Duis vitae felis vehicula, maximus lectus a, ullamcorper
        quam. Nulla sagittis venenatis fringilla. Fusce finibus accumsan risus,
        nec fermentum tortor ultricies eu. Sed ornare aliquet dui, quis posuere
        justo ornare at. In hac habitasse platea dictumst. Vivamus sit amet
        lectus eu lorem fermentum lobortis. Nullam tristique ante id justo
        sollicitudin scelerisque. Integer euismod ex nunc, a finibus nibh
        fringilla sit amet. Praesent tempor convallis arcu ut convallis. In eget
        augue turpis. Sed accumsan risus id efficitur tristique. Nulla sodales
        finibus dapibus. Proin scelerisque arcu vehicula, dignissim velit ac,
        condimentum ipsum. Nam laoreet at felis vel porttitor. Cras malesuada
        pretium dignissim. Proin aliquet lacinia ipsum, euismod ullamcorper dui.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        pellentesque rhoncus diam, ut elementum lectus bibendum non. Mauris non
        gravida quam. Aliquam posuere lectus vel enim fermentum, nec egestas
        enim auctor. Nullam vitae massa sit amet diam lobortis euismod. Cras at
        felis nec sapien pretium rutrum. Donec suscipit luctus ipsum, id congue
        augue ultrices vel. Sed at tincidunt est. Ut sit amet quam ut arcu
        varius pretium eu id lacus. Pellentesque congue risus quis turpis
        tempor, vitae accumsan justo convallis. Proin leo velit, tempor quis mi
        sit amet, sodales condimentum metus. Donec eu nisl vel urna pretium
        egestas. Nunc libero sapien, facilisis a consequat eu, luctus id est.
        Curabitur cursus dui augue, ut pharetra erat cursus accumsan. In
        efficitur nulla ultrices, auctor velit ac, luctus dolor. Donec auctor ac
        mi nec luctus. Donec efficitur ac lacus in mattis. Etiam sollicitudin
        euismod ante. Vestibulum dolor ligula, congue vel massa eget, suscipit
        ultricies leo. Curabitur pretium, odio sit amet molestie mollis, ex erat
        eleifend tortor, sit amet bibendum libero libero eget nulla. Cras
        tincidunt massa ac leo maximus iaculis. Proin pharetra purus eu maximus
        consequat. Vestibulum vitae vulputate ex. Phasellus commodo tristique
        rhoncus. Donec a nisi massa. Fusce nulla est, dignissim at dignissim
        nec, consectetur eu orci. Donec vel euismod ligula. Aliquam congue
        tellus quis nisi ultricies lobortis luctus pretium lacus. Donec ut nibh
        dictum, ornare sapien ut, fringilla mi. Ut eget mauris enim. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Etiam leo mauris, egestas eu tortor vel, accumsan
        maximus diam. Etiam ut ultricies nibh. Aliquam augue massa, blandit ut
        libero et, elementum mollis lorem. Morbi interdum erat ac scelerisque
        euismod. Duis egestas ipsum ac dui pharetra consectetur. Fusce eu lectus
        et nulla dapibus consequat. Duis finibus velit nec erat finibus
        hendrerit. Duis vitae felis vehicula, maximus lectus a, ullamcorper
        quam. Nulla sagittis venenatis fringilla. Fusce finibus accumsan risus,
        nec fermentum tortor ultricies eu. Sed ornare aliquet dui, quis posuere
        justo ornare at. In hac habitasse platea dictumst. Vivamus sit amet
        lectus eu lorem fermentum lobortis. Nullam tristique ante id justo
        sollicitudin scelerisque. Integer euismod ex nunc, a finibus nibh
        fringilla sit amet. Praesent tempor convallis arcu ut convallis. In eget
        augue turpis. Sed accumsan risus id efficitur tristique. Nulla sodales
        finibus dapibus. Proin scelerisque arcu vehicula, dignissim velit ac,
        condimentum ipsum. Nam laoreet at felis vel porttitor. Cras malesuada
        pretium dignissim. Proin aliquet lacinia ipsum, euismod ullamcorper dui.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        pellentesque rhoncus diam, ut elementum lectus bibendum non. Mauris non
        gravida quam. Aliquam posuere lectus vel enim fermentum, nec egestas
        enim auctor. Nullam vitae massa sit amet diam lobortis euismod. Cras at
        felis nec sapien pretium rutrum. Donec suscipit luctus ipsum, id congue
        augue ultrices vel. Sed at tincidunt est. Ut sit amet quam ut arcu
        varius pretium eu id lacus. Pellentesque congue risus quis turpis
        tempor, vitae accumsan justo convallis. Proin leo velit, tempor quis mi
        sit amet, sodales condimentum metus. Donec eu nisl vel urna pretium
        egestas. Nunc libero sapien, facilisis a consequat eu, luctus id est.
        Curabitur cursus dui augue, ut pharetra erat cursus accumsan. In
        efficitur nulla ultrices, auctor velit ac, luctus dolor. Donec auctor ac
        mi nec luctus. Donec efficitur ac lacus in mattis. Etiam sollicitudin
        euismod ante. Vestibulum dolor ligula, congue vel massa eget, suscipit
        ultricies leo. Curabitur pretium, odio sit amet molestie mollis, ex erat
        eleifend tortor, sit amet bibendum libero libero eget nulla. Cras
        tincidunt massa ac leo maximus iaculis. Proin pharetra purus eu maximus
        consequat. Vestibulum vitae vulputate ex. Phasellus commodo tristique
        rhoncus. Donec a nisi massa. Fusce nulla est, dignissim at dignissim
        nec, consectetur eu orci. Donec vel euismod ligula. Aliquam congue
        tellus quis nisi ultricies lobortis luctus pretium lacus. Donec ut nibh
        dictum, ornare sapien ut, fringilla mi. Ut eget mauris enim. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Etiam leo mauris, egestas eu tortor vel, accumsan
        maximus diam. Etiam ut ultricies nibh. Aliquam augue massa, blandit ut
        libero et, elementum mollis lorem. Morbi interdum erat ac scelerisque
        euismod. Duis egestas ipsum ac dui pharetra consectetur. Fusce eu lectus
        et nulla dapibus consequat. Duis finibus velit nec erat finibus
        hendrerit. Duis vitae felis vehicula, maximus lectus a, ullamcorper
        quam. Nulla sagittis venenatis fringilla. Fusce finibus accumsan risus,
        nec fermentum tortor ultricies eu. Sed ornare aliquet dui, quis posuere
        justo ornare at. In hac habitasse platea dictumst. Vivamus sit amet
        lectus eu lorem fermentum lobortis. Nullam tristique ante id justo
        sollicitudin scelerisque. Integer euismod ex nunc, a finibus nibh
        fringilla sit amet. Praesent tempor convallis arcu ut convallis. In eget
        augue turpis. Sed accumsan risus id efficitur tristique. Nulla sodales
        finibus dapibus. Proin scelerisque arcu vehicula, dignissim velit ac,
        condimentum ipsum. Nam laoreet at felis vel porttitor. Cras malesuada
        pretium dignissim. Proin aliquet lacinia ipsum, euismod ullamcorper dui.
      </p>
    </div>
  );
}

export default ModalPage;
