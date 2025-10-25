// sidebars.js

module.exports = {
  // Cette "defaultSidebar" s'appelle ainsi car c'est son "id" que nous avons utilisé dans la config ('defaultSidebar')
  defaultSidebar: [
    {
      type: 'category',
      label: 'Tests',
      items: [
        {
          type: 'doc',
          id: 'introduction',
          label: 'Introduction',
        },
        {
          type: 'category',
          label: 'Electronic Pole',
          items: [
            'Electronics/Overview',
            'Electronics/Test1',
            'Electronics/Test2',
            'Electronics/Test3',
          ],
        },
        {
          type: 'category',
          label: 'Mechanical Pole',
          items: [
            'Mechanics/Overview',
            'Mechanics/Test1',
            'Mechanics/Test2',
            'Mechanics/Test3',
          ],
        },
        {
          type: 'category',
          label: 'ROS Pole',
          items: [
            'ROS/Overview',
            'ROS/Test1',
            'ROS/Test2',
            'ROS/Test3',
          ],
        },
        {
          type: 'category',
          label: 'AI Pole',
          items: [
            'IA/Overview',
            'IA/Test1',
            'IA/Test2',
            'IA/Test3',
          ],
        },
      ],
    },
    
  ],
};