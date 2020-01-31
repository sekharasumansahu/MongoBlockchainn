/**
 * test controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import {
  check,
  validationResult
} from '../config/db';
import {
  Test
} from '../services/company';
export const testController = async (req, res) => {
  check('name')
    .isString()
    .isLength({
      min: 10
    }).withMessage('Name must be minimum of 5 characters.')

  const errors = validationResult(req);
  console.log(errors);
  
  if (!errors.isEmpty()) {
    let name = req.body.name;
    let testRes = await Test(name)
    res.status(200).send(testRes);
  }
  res.status(400).send(testRes);
}