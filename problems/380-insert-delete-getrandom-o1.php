<?php

// 380. Insert Delete GetRandom O(1)

class RandomizedSet {
    private $s = array();
    private $h = array();
    private $l = 0;
    private $c = 0;

    /**
     */
    function __construct() {

    }

    /**
     * @param Integer $val
     * @return Boolean
     */
    function insert($val) {
        if (array_key_exists($val, $this->h)) {
            return false;
        }
        array_push($this->s, $val);
        $this->h[$val] = $this->c;
        $this->l++;
        $this->c++;
        return true;
    }

    /**
     * @param Integer $val
     * @return Boolean
     */
    function remove($val) {
        if (array_key_exists($val, $this->h)) {
            unset($this->s[$this->h[$val]]);
            unset($this->h[$val]);
            $this->l--;
            return true;
        }
        return false;
    }

    /**
     * @return Integer
     */
    function getRandom() {
        return array_rand($this->h);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * $obj = RandomizedSet();
 * $ret_1 = $obj->insert($val);
 * $ret_2 = $obj->remove($val);
 * $ret_3 = $obj->getRandom();
 */
