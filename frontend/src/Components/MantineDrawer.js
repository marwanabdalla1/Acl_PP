import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';

export default function MantineDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
        <h2>Hello Drawer</h2>
      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}

