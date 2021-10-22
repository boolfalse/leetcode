<?php

class RandomizedSet {
    private $set = array();
    private $hash_map = array();
    private $length = 0;
    private $counter = 0;

    public function __construct() {
        //
    }

    /**
     * @param Integer $val
     * @return Boolean
     */
    public function insert($val): bool {
        if (array_key_exists($val, $this->hash_map)) {
            return false;
        }
        $this->set[$this->counter] = $val;
        $this->hash_map[$val] = $this->counter;
        $this->length++;
        $this->counter++;
        return true;
    }

    /**
     * @param Integer $val
     * @return Boolean
     */
    public function remove($val): bool {
        if (array_key_exists($val, $this->hash_map)) {
            $key = $this->hash_map[$val];
            unset($this->set[$key]);
            unset($this->hash_map[$val]);
            $this->length--;
            return true;
        }
        return false;
    }

    /**
     * @return Integer
     */
    public function getRandom(): int {
        return array_rand($this->hash_map);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * $obj = RandomizedSet();
 * $ret_1 = $obj->insert($val);
 * $ret_2 = $obj->remove($val);
 * $ret_3 = $obj->getRandom();
 */
