import { firebase } from '..';

/**
 * @typedef {import("..").FirebaseDatabaseTypes.Module} Database
 */

// TODO: figure out what to do with `url`
/**
 * @param {FirebaseApp?} app - The FirebaseApp instance that the returned Realtime Database instance is associated with.
 * @param {string?} url
 * @returns {Database}
 */
export function getDatabase(app, url) {
  if (app) {
    return firebase.app(app.name).database();
  }

  return firebase.app().database();
}

/**
 * @param {Database} db
 * @param {string} host
 * @param {number} port
 * @returns {void}
 */
export function connectDatabaseEmulator(db, host, port) {
  db.useEmulator(host, port);
}

/**
 * @param {Database} db
 * @returns {Promise<void>}
 */
export function goOffline(db) {
  return db.goOffline();
}

/**
 * @param {Database} db
 * @returns {Promise<void>}
 */
export function goOnline(db) {
  return db.goOnline();
}

/**
 * @param {Database} db
 * @param {string?} path
 * @returns {DatabaseReference}
 */
export function ref(db, path) {
  return db.ref(path);
}

/**
 * @param {Database} db
 * @param {string} url
 * @returns {DatabaseReference}
 */
export function refFromURL(db, url) {
  return db.refFromURL(url);
}

/**
 * @param {Database} db
 * @param {boolean} enabled
 * @returns {void}
 */
export function setPersistenceEnabled(db, enabled) {
  return db.setPersistenceEnabled(enabled);
}

/**
 * @param {Database} db
 * @param {boolean} enabled
 * @returns {void}
 */
export function setLoggingEnabled(db, enabled) {
  return db.setLoggingEnabled(enabled);
}

/**
 * @param {Database} db
 * @param {number} bytes
 * @returns {void}
 */
export function setPersistenceCacheSizeBytes(db, bytes) {
  return db.setPersistenceCacheSizeBytes(bytes);
}

// TODO: check if this function is supported on mobile
export function forceLongPolling() {
  throw new Error('Unimplemented');
}

// TODO: check if this function is supported on mobile
export function forceWebSockets() {
  throw new Error('Unimplemented');
}

/**
 * @param {Database} db
 * @returns {Date}
 */
export function getServerTime(db) {
  return db.getServerTime();
}

export * from './api/query';
