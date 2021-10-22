<?php

class RandomizedSet {
    private $s = array();
    private $h = array();
    private $l = 0;
    private $c = 0;

    public function __construct() {}

    public function insert($v): bool {
        if (array_key_exists($v, $this->h)) {return false;}
        $this->s[$this->c] = $v;
        $this->h[$v] = $this->c;
        $this->l++;
        $this->c++;
        return true;
    }

    public function remove($v): bool {
        if (array_key_exists($v, $this->h)) {
            unset($this->s[$this->h[$v]]);
            unset($this->h[$v]);
            $this->l--;
            return true;
        }
        return false;
    }

    public function getRandom(): int {
        return array_rand($this->h);
    }
}
