
public class main {
    public static void main
    int[][] A = {{1,2,3,4},{1,2,3,4},{1,2,3,4}};
    int[][] B = {{1,2,3,4},{1,2,3,4},{1,2,3,4}};
    int[][] C = congmatran(A,B);
    for (int i = 0; i < C.length; i++) {
        for (int j = 0; j < C[0].length; j++) {
            System.out.print(" " + C[i][j]);
        }
        System.out.println(" ");
    }
}