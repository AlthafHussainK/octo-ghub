// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type UserData = {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  name: string;
  company: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
};

export type User = {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
};
