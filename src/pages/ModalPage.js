import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import { useState } from 'react';
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        scelerisque, mi in auctor sodales, dui felis bibendum justo, hendrerit
        congue sem purus a dui. Nam augue quam, commodo sit amet sapien nec,
        laoreet dictum massa. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Quisque nisi enim, luctus et
        nibh id, ornare aliquet sapien. Cras at sagittis risus, in blandit
        lectus. Etiam molestie sem lectus, a viverra magna luctus ac. Vestibulum
        malesuada viverra euismod. Maecenas molestie, nisl non eleifend posuere,
        elit nulla mattis lectus, et dignissim tellus sapien in sem. Nam vel
        ultrices tortor. Vestibulum ac luctus lectus. Vestibulum bibendum
        laoreet leo, sit amet sagittis elit commodo sit amet. Phasellus
        hendrerit non metus ac elementum.
      </p>
    </div>
  );
};

export default ModalPage;
