// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by material-design-icons-fonts.js.
import { name as packageName } from "meteor/meteormogul:material-design-icons-fonts";

// Write your tests here!
// Here is an example.
Tinytest.add('material-design-icons-fonts - example', function (test) {
  test.equal(packageName, "material-design-icons-fonts");
});
