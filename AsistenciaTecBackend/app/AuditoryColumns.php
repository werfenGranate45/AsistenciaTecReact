<?php

namespace App;

use Illuminate\Database\Schema\Blueprint;

trait AuditoryColumns {
    public function auditoryFill(Blueprint $table){
        $table->uuid("token");
        $table->boolean("status");
        $table->foreign("userReg")->references("id")->default(1);
        $table->foreign("userMod")->references("id")->default(1);
        $table->dateTime("dateReg");
        $table->dateTime("dateMod");
    }

}