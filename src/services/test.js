/**
 * test controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import {
  TestDAO
} from '../dao/test';
import {
  validationResult
} from '../config/db.config';



export class TestServices {
  static async saveTest(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array()
        });
      }
      let name = req.body.name;
      let TestDAORes = await TestDAO.saveName(name);
      if (TestDAORes) {
        res.send(TestDAORes);
      }
    } catch (err) {
      console.log(err);
    }


  }
}