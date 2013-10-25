<?php

namespace Formativ\Chat;

use Ratchet\ConnectionInterface;

class User
implements UserInterface
{
    protected $socket;

    protected $name;

    public function getSocket()
    {
        return $this->socket;
    }

    public function setSocket(ConnectionInterface $socket)
    {
        $this->socket = $socket;
        return $this;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }
}