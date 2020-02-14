export interface User {
  id: number;
  username: string;
  createdAt: number;
  updatedAt: number;
  deletedAt?: number;
}

interface UserModel extends User {
  password?: string;
}

function deletePrivateData(user: UserModel): UserModel {
  return {
    id: user.id,
    username: user.username,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    deletedAt: user.deletedAt
  };
}

export async function getUserById(id: number): Promise<User | undefined> {
  // @TODO: get user
  const foundUser = null;
  if (foundUser) {
    return deletePrivateData(foundUser);
  }
}

export async function checkUserPassword(
  username: string,
  password: string
): Promise<User | undefined> {
  const foundUser = null;

  if (foundUser) {
    const hasAccess = true;

    // if (foundUser.roles.indexOf(UserRole.GUEST) < 0 && foundUser.password) {
    //   try {
    //     hasAccess = await bcrypt.compare(password, foundUser.password);
    //   } catch (err) {
    //     hasAccess = false;
    //   }
    // }

    if (hasAccess) {
      return deletePrivateData(foundUser);
    }
  }
}
