/**
 * company route
 * This file to define routes for company file.
 * @package src/routes
 * @subpackage routes/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { } from '../model/test';
export const Test = async (name) =>{
  let t = new test();
  t.name = name;
  let modelRes = t.save(t.name);
  console.log(modelRes);
}