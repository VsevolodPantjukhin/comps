import Accordion from '../components/Accordion/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: 'vkdsfnlkb',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'ks809igjdf',
      label: 'Can I use JavaScript on a project?',
      content:
        'You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.',
    },
    {
      id: 'aju6jnjcp9ln',
      label: 'Can I use CSS on a project?',
      content:
        'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.',
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
