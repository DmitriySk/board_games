import _mapKeys from 'lodash/mapKeys';
import _filter from 'lodash/filter';
import _values from 'lodash/values';
import _assign from 'lodash/assign';

/**
 * Implements interface to interact with Enumerations
 */
class Enum {
  /**
   * Constructor
   * @param obj Object is represents a key-value hashmap
   *            where key is enumeration name and value is object with id and name fields
   */
  constructor(obj) {
    this._idToType = _mapKeys(obj, v => v.id);
    this._nameToType = _mapKeys(obj, v => v.name.toLowerCase());
    this._availableIds = Object.values(obj).map(v => v.id);
    this._asList = _filter(_values(obj), v => v.id);
    _assign(this, obj);
  }

  /**
   * Returns type by id
   * @param id
   * @returns {*}
   */
  fromId(id) {
    return this._idToType[id];
  }

  /**
   * Returns type by id
   * @param name
   * @returns {*}
   */
  byName(name) {
    return this._nameToType[name.toLowerCase()];
  }

  /**
   * Returns list of types
   * @returns {Array}
   */
  asList() {
    return this._asList;
  }

  /**
   * Returns available IDs as integers
   * @returns {Array}
   */
  getAvailableIds() {
    return this._availableIds;
  }
}

export default Enum;
