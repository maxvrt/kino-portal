import { NextPageAuth } from "@/shared/types/auth.types"

// заменили тип NextPage на NextPageAuth
const ProfilePage: NextPageAuth = () => {
	return <div>PROFILE</div>
}

ProfilePage.isOnlyUser = true;

export default ProfilePage
