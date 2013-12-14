# Bootstrap 3 Switch - Meteor Smart Package

This is a the [bootstrap switch jquery plugin](https://github.com/nostalgiaz/bootstrap-switch) as a meteor smart package, specifically for use with bootstrap3

It is basically [Tim Heckels meteor-bootstrap-switch](https://github.com/TimHeckel/meteor-bootstrap-switch) but packages with the bootstrap3 files

##How to use?

1. Install [meteorite](https://github.com/oortcloud/meteorite)
2. `mrt install bootstrap-3-switch`

Unlike the original documentation, you must invoke the switches in your appropriate `Template.name.rendered` callback:

    $('.make-switch').bootstrapSwitch();
    
